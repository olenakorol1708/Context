import React,{createContext,useContext} from 'react'
const ThemeContext = createContext('light')
const MyPage = () => {
    const [theme,setTheme] = React.useState('light');
   

  return (
 <>
  <ThemeContext.Provider value={theme}>
        <Form />
      </ThemeContext.Provider>
      <Button onClick={() => {
        setTheme(theme==='dark'? 'light':'dark');
      }}>
        Toggle theme
      </Button>
      <label className = 'switch'>
      <input type = 'checkbox' className = 'switch__input' onChange = {()=>setTheme(theme=== 'dark' ? 'light' :'dark')}
      />
      <span className='swith__slider'></span>
      </label>
 </>
  )
}
function Form(){
    return (
        <Panel title = "Welcome">
            <Button>Sign up</Button>
            <Button>Log in</Button>
        </Panel>
    )
}
function Panel({title,children}){
    const theme = useContext(ThemeContext);
    const className = 'panel-'+theme;
    return(
        <section className = {className}>
<h1>{title}</h1>
{children}
        </section>
    )

}

function Button({children,onClick}){
    const theme = useContext(ThemeContext);
    const className = 'button-'+theme;
    return(
    <button className = {className} onClick = {onClick}>
        {children}
    </button>
    )
}

export default MyPage
