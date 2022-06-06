import {AiOutlineLinkedin, AiFillGithub} from 'react-icons/ai';
function Footer() {



  return (
    <footer>
      <div className="top-footer">
        <p>CSS</p>
        <p>Express</p>
        <p>NodeJs</p>
        <p>React</p>
        <p>Sequelize</p>
        <p>Redux</p>
        <p>PostgresSQL</p>
      </div>

      <div className="bottom-footer">
      2022 &#169; Jose L Martinez Saldana | <a href="https://github.com/jmartinezsal"><AiFillGithub /></a> <a href="https://www.linkedin.com/in/jose-martinez-b7a1b3b8/"> <AiOutlineLinkedin></AiOutlineLinkedin> </a>
      </div>
    </footer>
  )
}

export default Footer;
