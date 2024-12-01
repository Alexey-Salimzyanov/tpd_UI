import React from 'react';
import CustomCheckbox from '../UI/CustomCheckbox/CustomCheckbox.js'
import CustomButton from '../UI/CustomButton/CustomButton.js';
import Dropdown from '../UI/Dropdown/Dropdown.js';
import Table from '../components/table/Table.js';
import Tabs from '../components/Tabs/Tabs.js';



const MainPage = () => {
	const tabs = []
	for (let i = 1; i<=30; i++){
		tabs.push({ label: `Вкладка ${i}`, content: <div>Содержимое вкладки {i}</div> })
	}

	const data = [
		{ name: 'Продукт 1', description: 'Описание 1', price: '$10' },
		{ name: 'Продукт 2', description: 'Описание 2', price: '$20' },
		{ name: 'Продукт 3', description: <CustomCheckbox></CustomCheckbox>, price: '$30' },
	  ]

	return (
	  <div style={{}}>
		    <div className="App">
				<Tabs tabs={tabs} />
			</div>
		<div style={{margin:"10px"}}> 
		  <CustomButton onClick={() => alert('нажатие')}>кнопка</CustomButton>
		</div>
		<div style={{margin:"10px"}}> 
		  <CustomCheckbox>чекбокс</CustomCheckbox>
		</div>
		<div style={{margin:"10px"}}> 
		  <Dropdown style={{padding: "10px"}}>
			  <option value="">выбор опции</option>
			  <option value="option1">создать р.п.</option>
			  <option value="option2">Опция 2</option>
			  <option value="option3">Опция 3</option>
		  </Dropdown>
		</div>
		<div style={{margin:"10px"}}> 
		  <CustomButton onClick={() => alert('нажатие')}>кнопка</CustomButton>
		</div>
		<div style={{margin:"10px"}}> 
		  <CustomCheckbox>чекбокс</CustomCheckbox>
      <h1>Таблица данных</h1>
      <Table data={data} />
    </div>
	  </div>
	);
  };

export default MainPage