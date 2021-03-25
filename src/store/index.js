import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../firebase'
import router from '../router/index'

Vue.use(Vuex)

// realtime firebase
fb.postsCollection.orderBy('createdOn', 'desc').onSnapshot(snapshot => {
  let postsArray = []

  snapshot.forEach(doc => {
    let post = doc.data()
    post.id = doc.id

    postsArray.push(post)
  })

  store.commit('setPosts', postsArray)
})

fb.balancesCollection.onSnapshot(snapshot => {
  let balancesArray = []

  snapshot.forEach(doc => {
    let balance = doc.data()
    balance.id = doc.id

    balancesArray.push(balance)
  })

  store.commit('setBalances', balancesArray)
})

fb.transactions.orderBy('createdAt', 'desc').onSnapshot(snapshot => {
  let transactionsArray = []

  snapshot.forEach(doc => {
    let transaction = doc.data()
    transaction.id = doc.id

    transactionsArray.push(transaction)
  })

  store.commit('setTransactions', transactionsArray)
})

fb.usersCollection.orderBy('name', 'desc').onSnapshot(snapshot => {
  let usersArray = []

  snapshot.forEach(doc => {
    let user = doc.data()
    user.id = doc.id

    usersArray.push(user)
  })

  store.commit('setUsers', usersArray)
})

const store = new Vuex.Store({
  state: {
    userProfile: {},
    posts: [],
    transactions: [],
    users: [],
    balances: [],
    desejosDeAcesso: []
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val
    },
    setPerformingRequest(state, val) {
      state.performingRequest = val
    },
    setPosts(state, val) {
      state.posts = val
    },
    setTransactions(state, val) {
      state.transactions = val
    },
    setUsers(state, val) {
      state.users = val
    },
    setBalances(state, val) {
      state.balances = val
    }
  },
  actions: {
    async login({ dispatch }, form) {
      // sign user in
      const { user } = await fb.auth.signInWithEmailAndPassword(form.email, form.password)

      // fetch user profile and set in state
      dispatch('fetchUserProfile', user)
    },
    async signup({ dispatch }, form) {
      // sign user up
      const { user } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password)

      // create user object in userCollections
      await fb.usersCollection.doc(user.uid).set({
        name: form.name,
        title: form.title
      })

      // fetch user profile and set in state
      dispatch('fetchUserProfile', user)
    },
    async fetchUserProfile({ commit }, user) {
      // fetch user profile
      const userProfile = await fb.usersCollection.doc(user.uid).get()

      // set user profile in state
      commit('setUserProfile', userProfile.data())

      // change route to dashboard
      if (router.currentRoute.path === '/login') {
        router.push('/')
      }
    },
    async logout({ commit }) {
      // log user out
      await fb.auth.signOut()

      // clear user data from state
      commit('setUserProfile', {})

      // redirect to login view
      router.push('/login')
    },
    async createPost({ state, commit }, post) {
      // create post in firebase
      await fb.postsCollection.add({
        createdOn: new Date(),
        content: post.content,
        userId: fb.auth.currentUser.uid,
        userName: state.userProfile.name,
        comments: 0,
        likes: 0
      })
    },
    async emmitTokensDb({ state, commit }, payload) {      
      await fb.transactions.add({
        createdAt: new Date(),  
        amount: payload.amount,
        fromUid: fb.auth.currentUser.uid,
        toUid: payload.toUid,
        description: payload.description,
        type: "em",
        completed: false
      })
      // .then(await fb.balancesCollection.add({  
      //   uid: payload.toUid,
      //   amount: payload.amount     
      // }))
      
      alert("Salvo com sucesso")
    },
    async getTransactionDb({ commit }) {      
      await fb.transactions.get();
      const transactions = await fb.transactions.get()

      // set user profile in state
      commit('setTransactions', transactions.data())    
           
    },
    async fetchUsers({ commit }) {        
      await fb.usersCollection.get();
      const users = await fb.usersCollection.get() 
      // set users in state
      commit('setUsers', users.data())     
    },
    async likePost ({ commit }, post) {
      const userId = fb.auth.currentUser.uid
      const docId = `${userId}_${post.id}`

      // check if user has liked post
      const doc = await fb.likesCollection.doc(docId).get()
      if (doc.exists) { return }

      // create post
      await fb.likesCollection.doc(docId).set({
        postId: post.id,
        userId: userId
      })

      // update post likes count
      fb.postsCollection.doc(post.id).update({
        likes: post.likesCount + 1
      })
    },
    async updateProfile({ dispatch }, user) {
      const userId = fb.auth.currentUser.uid
      // update user object
      const userRef = await fb.usersCollection.doc(userId).update({
        name: user.name,
        title: user.title
      })

      dispatch('fetchUserProfile', { uid: userId })

      // update all posts by user
      const postDocs = await fb.postsCollection.where('userId', '==', userId).get()
      postDocs.forEach(doc => {
        fb.postsCollection.doc(doc.id).update({
          userName: user.name
        })
      })

      // update all comments by user
      const commentDocs = await fb.commentsCollection.where('userId', '==', userId).get()
      commentDocs.forEach(doc => {
        fb.commentsCollection.doc(doc.id).update({
          userName: user.name
        })
      })
    }
  }
})

export default store
