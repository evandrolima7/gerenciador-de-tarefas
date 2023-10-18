export default function Home(){
    return(
                <section 
                style={{backgroundColor: 'white', display:'flex',flexDirection:'column',textAlign:'center', justifyContent:'center', padding:'4em'}}>
                    <h1>Bem-vindo ao <span>Gerenciador de tarefas</span></h1>
                    <p style={{textAlign: 'center'}}>Comece a gerenciar as suas tarefas!</p>
                    
                    <img src='./tarefas.png' alt="vendas" className="w-1/5 m-5"/>
                    <div>
                   <button><a href="/criartarefas" className="btn-home">Criar tarefas</a> </button></div>
                </section>
            )
        }
    
