export default function ({ redirect, store, route }) {
  const user = store.state.auth.user
  const roles = user.roles.map((r) => r.name)

  const { hash, name } = route
  const intended = '/profile#company'
  if (
    roles.includes('company') &&
    !user.company &&
    name !== 'profile' &&
    hash !== 'company'
  ) {
    return redirect(intended)
  }
}
