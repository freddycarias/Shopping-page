import { ChangeEvent, useEffect, useState } from "react";
import Header from "../layout/Header/Header";
import { Bank } from "../models/bank";
import { bankService } from "../services/bank.service";

export default function PagePage() {
  const [bank, setBank] = useState<Bank[]>([]);
  const [newBank, setNewBank] = useState("");
  const [newBankNames, setNewBankNames] = useState<{ [key: string]: string }>(
    {}
  );
  const [editingBankId, setEditingBankId] = useState("");

  useEffect(() => {
    const unsubscribe = bankService.getAllBank((data) => {
      setBank(data);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleClickDeleteBank = async (idDocumento: string) => {
    try {
      await bankService.deleteDoc(idDocumento);
      console.log("Banco eliminado correctamente");
      setNewBank("");
    } catch (error) {
      console.error("Error al eliminar el banco:", error);
    }
  };

  const handleChangeBankName = (event: ChangeEvent<HTMLInputElement>) => {
    setNewBank(event.target.value);
  };

  const handleChangeEditBank = (
    event: ChangeEvent<HTMLInputElement>,
    idDocumento: string
  ) => {
    const value = event.target.value;
    setNewBankNames((prevNames) => ({
      ...prevNames,
      [idDocumento]: value,
    }));
    setEditingBankId(idDocumento);
  };

  const handleClickAddBank = async () => {
    try {
      await bankService.addDoc(newBank);
      console.log("Banco Creado correctamente");
    } catch (error) {
      console.error("Error al añadir el Banco:", error);
    }
  };
  const handleClickEditBankName = async (idDocumento: string) => {
    try {
      const newBankName = newBankNames[idDocumento] || "";
      await bankService.editDoc(idDocumento, newBankName);
      console.log("Nombre Actualizado correctamente");
      setNewBank("");
      setNewBankNames((prevNames) => ({
        ...prevNames,
        [idDocumento]: "",
      }));
      setEditingBankId("");
    } catch (error) {
      console.error("Error al añadir el Banco:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col text-center">
            <div className="row">
              <div className="add-bank input-group mb-5">
                <input
                  className="form-control"
                  type="text"
                  value={newBank}
                  onChange={handleChangeBankName}
                />
                <button
                  className="btn btn-primary"
                  onClick={handleClickAddBank}
                >
                  Crear
                </button>
              </div>
              <table>
                <tbody>
                  <tr style={{ border: "1px solid black" }}>
                    <td style={{ border: "1px solid black", width: "200px" }}>
                      Banco
                    </td>
                    <td style={{ border: "1px solid black", width: "300px" }}>
                      Opciones
                    </td>
                  </tr>
                  {bank.map((bank) => (
                    <tr style={{ border: "1px solid black" }} key={bank.id}>
                      <td style={{ border: "1px solid black" }}>
                        {editingBankId === bank.id ? (
                          <input
                            className="form-control-2"
                            type="text"
                            value={newBankNames[bank.id] || ""}
                            onChange={(event) =>
                              handleChangeEditBank(event, bank.id)
                            }
                          />
                        ) : (
                          bank.name
                        )}
                      </td>
                      <td>
                        {editingBankId === bank.id ? (
                          <>
                            <button
                              className="btn btn-success me-4"
                              onClick={() => handleClickEditBankName(bank.id)}
                            >
                              Guardar
                            </button>
                            <button
                              className="btn btn-secondary"
                              onClick={() => setEditingBankId("")}
                            >
                              Cancelar
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              className="btn btn-warning me-4"
                              onClick={() => setEditingBankId(bank.id)}
                            >
                              Editar
                            </button>
                            <button
                              className="btn btn-danger ms-4"
                              onClick={() => handleClickDeleteBank(bank.id)}
                            >
                              Eliminar
                            </button>
                          </>
                        )}
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
