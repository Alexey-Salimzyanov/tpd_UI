import React, { useState } from 'react';
import TableWithContextMenu from '../components/table/TableWithContext';
import Modal from '../components/Modal/Modal';


const data = [
  { name: 'Товар 1', description: 'Описание 1', price: '100' },
  { name: 'Товар 2', description: 'Описание 2', price: '200' }
];



const OtherPage = () => {
	
	const [showModal, setShowModal] = useState(false)
	
	const toggleModal = () => { setShowModal(!showModal)}

	const actions = {
		name: [
		  { label: 'Редактировать название', onClick: () => toggleModal() },
		  { label: 'Удалить название', onClick: () => alert('Удалить название') }
		],
		description: [
		  { label: 'Редактировать описание', onClick: () => alert('Редактировать описание') }
		],
		price: [
		  { label: 'Изменить цену', onClick: () => alert('Изменить цену') }
		]
	  };
	  
	return (
	<>
	  <div style={{}}>
		<TableWithContextMenu data={data} actions={actions} />,
	  </div>
	  <Modal show={showModal} onClose={toggleModal}> <h2>модальное окно</h2> <p>Содержимое модального окна.</p>
	   </Modal>
	</>
	);
  };

export default OtherPage