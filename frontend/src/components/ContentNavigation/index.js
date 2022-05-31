
function ContentNavigation({ content, type }) {


  return (
    <div className="content-nav">
      {type === "notes" ? (

        <div className="content-nav-header">
          <img src='/images/note-icon.svg' alt="note-icon"></img>
          <p>Notes</p>
        </div>

      ) : null}
      <div className="content-selection-container">
        {content.map(item => (
          <div className="content-item-card" key={item.id}>
            <p className="note-title">{item.title}</p>
            <p className="note-content">{item.content} </p>
            <p className="note-content">{item.updatedAt.slice(5, 10)}-{item.updatedAt.slice(0, 4)}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default ContentNavigation;
