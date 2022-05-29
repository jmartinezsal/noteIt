
function ContentNavigation({ content, type }) {


  return (
    <div className="content-nav">
      <div className="content-nav-header">
        {type === "notes" ? (
          <>
            <img src='/images/note-icon.svg' alt="note-icon"></img>
            <p>Notes</p>
          </>
        ) : null}
      </div>
      <div className="content-selection-container">
          {content.map(item =>(
            <div className="content-item-card" key={item.id}>
              <p className="content-item-title">{item.title}</p>
              <p className="content-item-content">{item.content} </p>
              <p className="content-item-content">{item.updatedAt.slice(5,10)}-{item.updatedAt.slice(0,4)}</p>
            </div>
          ))}
      </div>

    </div>
  )
}

export default ContentNavigation;
