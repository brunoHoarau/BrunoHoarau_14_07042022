import Form from '../components/Form/Form';
import Header from '../components/Header/Header';
import Button from '../components/Button/Button';
import Modal from '../components/Modal/Modal';
import { useSelector } from 'react-redux';

const CreateEmployee = () =>  {
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
									text="Employee Created!" 
									styleModal={{
										width: "250px"
									}}
								/> : ""
							}
          	</main>
          </div>
        </>
	  	
	  )
}

export default CreateEmployee;