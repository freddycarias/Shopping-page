import Header from "../layout/Header/Header";
import { Banks } from "../services/ComponentList/BankList";
import { useState } from "react";

interface Bank {
  id: number;
  bank: string;
}

export default function PagePage() {
  
  const [bank , setBank] = useState<Bank[]>(Banks);
  const [newBankName, setNewBankName] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleEditBankName = (index:number , newName: string) => {
    const updateBank = [...bank];
    updateBank[index].bank = newName;
    setBank(updateBank);
    setEditingIndex(-1)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewBankName(e.target.value)
  }

  const handleUpdateBankName = (index: number) => {
    handleEditBankName(index, newBankName);
    setNewBankName('')
  }

  const handleDeleteBank = (index: number) => {
    const updatedBank = [...bank];
    updatedBank.splice(index, 1 )
    setBank(updatedBank)
  }

  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col text-center">
            <div className="row">
              <table>
                <tbody>
                  <tr style={{ border: "1px solid black" }}>
                    <td style={{ border: "1px solid black" , width: "200px"}}>Banco</td>
                    <td style={{ border: "1px solid black", width: "300px" }}>Opciones</td>
                  </tr>
                  {bank.map((bank: Bank, index: number) => (
                    <tr style={{ border: "1px solid black" }} key={bank.id}>
                      <td>
                        {index === editingIndex ? (
                          <input
                            type="text"
                            value={newBankName}
                            onChange={handleInputChange}
                          />
                        ) : (
                          bank.bank
                        )}
                      </td>
                      <td style={{ border: "1px solid black" }}>
                        {index === editingIndex ? (
                          <>
                            <button
                              className="btn btn-success me-2"
                              onClick={() => handleUpdateBankName(index)}
                            >
                              Guardar
                            </button>
                            <button
                              className="btn btn-secondary me-2"
                              onClick={() => setEditingIndex(-1)}
                            >
                              Cancelar
                            </button>
                          </>
                        ) : (
                          <button
                            className="btn btn-warning me-2"
                            onClick={() => setEditingIndex(index)}
                          >
                            Editar
                          </button>
                        )}
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDeleteBank(index)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
