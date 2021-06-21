export default function ({ redirect, store }) {
  const isAuthenticated = !!store.state.auth.user
  // console.log(store.state.auth.user)
  if (isAuthenticated) {
    return redirect('/')
  }
}
