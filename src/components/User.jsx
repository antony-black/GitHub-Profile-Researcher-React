export default function User({userData}) {
   const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = userData;

  const createdDate = new Date(created_at);

  const getName = () => {
    return name ? name : login;
  }

  return (
    <div className="user-data-container">
      <div className="avatar">
        <img src={avatar_url} alt="user-avatar"/>
      </div>
      <div className="about-user">
      Name:
        <a href={`https://github.com/${login}`}>{getName()}</a>
      </div>
      <p className="created">
        {`Created on: ${createdDate.getDate()} ${createdDate.toLocaleDateString('en-us', {month: "short",})} ${createdDate.getFullYear()}`}
      </p>
      <p className="followers">
        {`Followers: ${followers}`}
      </p>
      <p className="following">
        {`Following: ${following}`}
      </p>
      <p className="public-repos">
        {`Public Repositories: ${public_repos}`}
      </p>
    </div>
  )
}

