
const Button = ({ text, className, id, imgsrc }) => {

  function link(){
  if(id==='counter'){
      const target = document.getElementById("counter");

      if (target && id) {
        const offset = window.innerHeight * 0.15; 
        const top =
          target.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({ top, behavior: "smooth" });
      }
  } else if(id==='works'){
    window.open('https://github.com/viditasingh', '_blank');
  }
}

  return (
    <a
      onClick={((e) => {
        
      e.preventDefault(); 
      link();
      })}
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src={imgsrc} alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
