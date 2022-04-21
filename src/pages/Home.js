import Form from '../components/Form/Form';
import Header from '../components/Header/Header';
import Button from '../components/Button/Button';
import Modal from '../components/Modal/Modal';
import { useSelector } from 'react-redux';

const Home = () =>  {
	const modal = useSelector( state => state.openModal)
	  return(
        <>
          <div>
          	<Header />
          	<main>
          	  <Form />
              <Button />
							{ modal ? 
								<Modal 
									h1="Titre Modal"
									text="lorem opsum si vi passeum para belum se ve pace pour voir le responsive" 
									styleModal={{
										backgroundColor: "",
									}}
									styleH1={{
									}}
									styleText={{
									}}
								/> : ""
							}
          	</main>
          </div>
        </>
	  	
	  )
}

export default Home;