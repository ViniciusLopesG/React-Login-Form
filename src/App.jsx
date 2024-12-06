import "./App.css";
import LoginForm from "../src/assets/images/LoginForm.png"; // Certifique-se de que o caminho está correto
import { BiSolidShoppingBagAlt } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function IconButton({ children, text, iconColor, ...props }) {
  return (
    <button
      {...props}
      className="text-lg border text-stone-600 flex justify-center items-center gap-x-2 block w-1/2 py-3"
      aria-label={text}
    >
      {children}
      <div className="font-semibold text-base text-blue">{text}</div>
    </button>
  );
}

function App() {
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
        <div className="form-container rounded-2xl flex justify-between shadow-xl border w-11/12 max-w-screen-xl">
          <div className="form-section w-1/2 px-24 py-12">
            <div className="logo-wrap flex justify-left gap-x-1 items-center">
              <BiSolidShoppingBagAlt className="text-blue text-2xl" />
              <span>dotwork</span>
            </div>
            <h1 className="text-3xl font-semibold mt-6 opacity-80 text-neutral-900">
              faça login na sua conta
            </h1>
            <p className="text-black opacity-60 mt-3">
              bem vindo de volta! selecione o método para fazer login
            </p>

            <div className="oath-btns flex justify-between gap-x-5 mt-8">
              <IconButton text="Google" iconColor="#fff">
                <FcGoogle />
              </IconButton>
              <IconButton text="Facebook" iconColor="#4267B2">
                <FaFacebook />
              </IconButton>
            </div>
            <span className="block text-center opacity-70 mt-6 mb-10 text-gray-800">
              ou continue com e-mail
            </span>
          </div>
            
          <div className="bg-section w-1/2 flex flex-col justify-center items-center bg-blue p-6">
            <div className="bg-wrap mb-4">
              <img src={LoginForm} alt="Login Form" className="rounded-lg" />
            </div>
            <div className="bottom-sec-wrap text-center">
              <h2 className="text-white text-2xl text-lg font-bold mb-1">
                Conecte-se com todas as aplicações
              </h2>
              <p className="text-white mb-8">
                Tudo que você precisa em um painel facilmente personalizável
              </p>
            </div>
            <div className="dots flex justify-center items-center gap-x-3 m-8">
              <div className="dot w-2 h-2 bg-white rounded-2xl block"></div>
              <div className="dot w-2 h-2 bg-white rounded-2xl block"></div>
              <div className="dot w-2 h-2 bg-white rounded-2xl block"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
