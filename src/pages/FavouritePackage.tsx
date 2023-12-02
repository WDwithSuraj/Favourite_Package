import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import Swal from "sweetalert2";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

interface Package {
  package_name: string;
  desc: string;
}

export const FavouritePackage = () => {
  const [storedData, seatStoredData] = useState( localStorage.getItem("favouritePackage"))
  const LSFavouriteData = storedData ? JSON.parse(storedData) : [];
  const navigation = useNavigate()


   const handleDataDelete = (name:string) => {
          Swal.fire({
          title: "Are you sure?",
          text: "You won't to delete this package",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#73a0ca",
          cancelButtonColor: "#a45151",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Deleted!",
              text: "Your Package has been deleted.",
              icon: "success"
            });

             const deletedData =  LSFavouriteData.filter((el : Package) => el.package_name !== name)
            localStorage.setItem("favouritePackage", JSON.stringify(deletedData))
            seatStoredData(JSON.stringify(deletedData))
          }
        });


   
   }

   const handleEdit = async (desc : string, name : string) => {
            const { value } = await Swal.fire({
        title: "Edit Description",
        input: "text",
        inputValue : desc
      });
      if (value) {
        Swal.fire(`Edited: ${value}`);
      }

      if(value) {
        let editDatedData:Package[] = []
      LSFavouriteData.forEach((el : Package)=> {
        if(name === el.package_name) {
          el.desc = value
        }
        editDatedData.push(el)
      })
      localStorage.setItem("favouritePackage", JSON.stringify(editDatedData))
       seatStoredData(JSON.stringify(editDatedData))
      }
      
      
   }



    return(
      <div>
        <div className="headerContainer w-[80%] m-[auto] mt-5 flex items-center justify-between">
          <p className="text-xl font-sans  mt-5 p-4 ">Welcome to Favourite NPM Packages</p>
          {
            LSFavouriteData.length?
             <Button text='Add Fav' className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-100 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 w-[8.5rem] h-[3.5rem]" onClick={()=> navigation("/add-favourite")}/> : ""
          }
        </div>
          
      {
        LSFavouriteData.length? 
          <div className="favoruiteDataContainer">
              
               
                    <table className="border-2 border-black w-[80%] m-[auto]">
                      <thead>
                        <tr >
                          <th className="border-2 m-2 p-3 border-black">Package Name</th>
                          <th className="border-2 m-2 p-3 border-black">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                           LSFavouriteData.map((el : Package, ind : number)=> {
                            return(
                              <tr className="border-2  border-black " key={ind}>
                                <td className="border-2 font-mono text-lg text-center border-black">{el.package_name}</td>
                                <td className="flex justify-around m-2 p-2">
                                  <Eye onClick={()=> Swal.fire(el.desc, )} />
                                  <Pencil onClick={()=> handleEdit(el.desc, el.package_name)}/>
                                  <Trash2 onClick={()=> handleDataDelete(el.package_name)} />
                                </td>
                              </tr>
                            )
                           })
                        }
                      </tbody>
                    </table>
                  
                
              
          </div>
        
        : 
            <div className="emptyContainer border-2 border-black w-[80%] flex m-[auto] h-[400px] justify-center         items-center mt-[80px] flex-col">
            <p className="m-4 p-2 text-lg text-gray-400">You don't have any favs yet, Please add!</p>
              <Button text='Add Fav' className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-100 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 w-[8.5rem] h-[3.5rem]" onClick={()=> navigation("/add-favourite")}/>
              </div> 
              
              
        
      }
      </div>
    )
}