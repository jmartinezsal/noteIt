
function ContentNavigation({ content, type }) {


  return (
    <div className="content-nav">
      <div className="content-nav-header">
        {type === "notes" ? (
          <>
            <img src='/images/note-icon.svg' alt="note-icon"></img>
            <p>All Notes</p>
          </>

        ) : (
          <>
            <i className="fa-solid fa-book "></i>
            <p>{type}</p>
            <div className="content-actions">
              <i className="fa-solid fa-file-pen"></i>
              <i className="fa-solid fa-trash"></i>
            </div>

          </>
        )}
      </div>
      <div className="content-selection-container">
        {content?.map(item => (
          <div className="content-item-card" key={item?.id}>
            <p className="note-title">{item?.title}</p>
            <p className="note-content">{item?.content} </p>
            <p className="note-content">{item.updatedAt.slice(5, 10)}-{item.updatedAt.slice(0, 4)}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default ContentNavigation;
