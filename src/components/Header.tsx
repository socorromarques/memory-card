export default function Header({ children }) {

    let fontSize = 'text-xl';

    return(
    <header>
      <div className="bg-blue-500 mx-auto p-7 rounded">
  
        <h1 className={`text-center font-semibold ${fontSize}`}>{children}</h1>
      
      </div>
    </header>
)
    
}
  