function UserIdPage(props) {
  return <h2>{props.id}</h2>
}

export default UserIdPage

export async function getServerSideProps(context) {
  const { params } = context

  const userId = params.uid

  return {
    props: {
      id: 'userid-' + userId,
    },
  }
}
