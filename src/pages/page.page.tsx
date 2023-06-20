import { ChangeEvent, useEffect, useState } from "react";
import Header from "../layout/Header/Header";
import { Bank } from "../models/bank";
import { bankService } from "../services/bank.service";

export default function PagePage() {
  const [bank, setBank] = useState<Bank[]>([]);
  const [newBank, setNewBank] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const typeOfBank = await bankService.getAllBank();
        setBank(typeOfBank);
      } catch (error) {
        throw new Error("Error");
      }
    };
    fetchData();
  }, []);

  const handleClickDeletBank = async (idDocumento: string) => {
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

  const handleClickAddBank = async () => {
    try {
      await bankService.addDoc(newBank);
      console.log("Banco Creado correctamente");
      // Realiza cualquier otra acción después de eliminar el documento
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
                      <td style={{ border: "1px solid black" }}>{bank.name}</td>
                      <td>
                        <button className="btn btn-warning me-4">Editar</button>
                        <button
                          className="btn btn-danger ms-4"
                          onClick={() => handleClickDeletBank(bank.id)}
                        >
                          Eliminar
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
