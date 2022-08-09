

export default function Footer() {
    const icons = [
        {
          name: "fa fa-github fa-2xl",
          link: "https://github.com/Ghazaleh-J"
        },
        {
          name: "fa fa-linkedin fa-2xl",
          link: "https://www.linkedin.com/in/ghazaleh-javadi/"
        },
        {
          name: "fa-regular fa-envelope fa-2xl",
          link: "mailto: ghazaleh.javadi@outlook.com" 
        },
        {
          name: "fa fa-stack-overflow fa-2xl",
          link: "https://stackoverflow.com/users/18340584/ghazaleh"
        }
      ]
      

      return (
        <footer>
         {icons.map(icon => (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
        </footer>
      )
    
}