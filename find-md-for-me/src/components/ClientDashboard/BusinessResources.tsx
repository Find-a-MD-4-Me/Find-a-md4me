"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { FaRegFileAlt } from "react-icons/fa";
import { useBusinessResourcesQuery } from "@/redux/apiSlices/ClientDashboardSlices";
import { baseUrl } from "@/redux/api/apiSlice";

const BusinessResources = () => { 
  const {data} = useBusinessResourcesQuery(undefined)  
  const resources = data?.data 

  // const content = ["Protocols", "Standing Order", "Policies", "Consents"]; 
  return (
    <div className=" shadow-sm lg:my-4  lg:h-[100%]  ">
      <Tabs defaultValue="Protocols" className=" mt-5 ">
        <TabsList className="bg-transparent text-[#737373] flex justify-center items-center  px-4">
          <TabsTrigger
            value="Protocols"
            className="data-[state=active]:bg-[#C738BD]  lg:px-7 px-3 lg:text-lg text:sm "
          >
            Protocols
          </TabsTrigger>

          <TabsTrigger
            value="Standing Order"
            className="data-[state=active]:bg-[#C738BD] lg:px-7 px-3 lg:text-lg text:sm "
          >
            Standing Order
          </TabsTrigger>

          <TabsTrigger
            value="Policies"
            className="data-[state=active]:bg-[#C738BD] lg:px-7 px-3 lg:text-lg text:sm "
          >
            Policies
          </TabsTrigger> 

          <TabsTrigger
            value="Consents"
            className="data-[state=active]:bg-[#C738BD] lg:px-7 px-3 lg:text-lg text:sm "
          >
            Consents
          </TabsTrigger>
        </TabsList>

        <div>
       
            <TabsContent   value="Protocols" > 

              <div className="lg:mx-8 mx-4 bg-[#FDFDFD] rounded-lg lg:px-10 px-4 py-2 lg:py-5  ">
                <p className=" text-nowrap  lg:text-xl text-[#252B42] font-semibold pb-2">
                  {" "}
                  Protocols
                </p> 
                <p className="lg:text-lg text-[#252B42] pb-6">View Protocols Document</p>   

                <div className="h-[500px] overflow-y-auto">

                {
                  resources?.map((values:any , index:number)=>  <div key={index}  >  
               {
                   values?.protocol_image?.length > 0 && <p className=" text-nowrap  lg:text-xl text-[#252B42] font-semibold pb-3"> {values?.tyer_name} </p>
                   }
                    {
                      values?.protocol_image?.map((value:any , index:number)=><div key={index} className=" bg-[#E8F6FE] px-4 py-2 rounded-lg lg:w-[280px] mb-3">
                      <a className="flex text-[#1D75F2] items-center gap-2"  href={`${baseUrl}${value}`}
              download={`Protocols.pdf ${index+1}`}
                   target="_blank"  
                    >
                        {" "}
                        <span>
                          {" "}
                          <FaRegFileAlt />{" "}
                        </span>{" "}
                        <span>Protocols Info {index+1}</span>
                      </a>
                    </div>)
                    }
                  </div>
                    
                  )
                }
                </div>
          
              </div> 

              <div className=" flex justify-center items-center mx-auto"> 
                <p className="lg:w-2/3 w-full  absolute bottom-2 text-[#737373] text-justify px-4"> Disclaimer: These forms and consents must be used in conjunction with applicable federal and state rules as they relate to the standard of care required to provide such medical and cosmetic treatment. Nothing in these documents or treatment protocols should be interpreted to supersede applicable federal or state rules. These documents are meant for guidance and information only – use of the forms should be in conjunction with advice from local legal counsel based upon your individual circumstances. Find a MD 4 Me assumes no liability from any use of these forms. Transfer or sale of these forms is strictly prohibited. All policies/procedures and protocols are copyrighted.</p>
              </div>
            </TabsContent>
         
         
            <TabsContent   value="Standing Order">
              <div className="lg:mx-8 mx-4 bg-[#FDFDFD] rounded-lg lg:px-10 px-2 py-2 lg:py-5 h-[100%]">
                <p className=" text-nowrap  lg:text-xl text-[#252B42] font-semibold pb-2">
                  Standing Order
                </p> 
                <p className="lg:text-lg text-[#252B42] pb-6">View  Standing Order Document</p>  
                <div className="h-[500px] overflow-y-auto"> 

                {
                  resources?.map((values:any , index:number)=> <div key={index}> 
                       {
                   values?.standing_image?.length > 0 && <p className=" text-nowrap  lg:text-xl text-[#252B42] font-semibold pb-3"> {values?.tyer_name} </p>
                   }
                      {
                        values?.standing_image?.map((value:any , index:number)=> { 
                         
                        return(<div key={index} className=" bg-[#E8F6FE] px-4 py-2 rounded-lg lg:w-[280px] mb-2"> 
                        <a
                          className="flex text-[#1D75F2] items-center gap-2"
                          href={`${baseUrl}${value}`}
                          download={`Standing Order Info ${index+1}.pdf`}
                          target="_blank"
                        >
          <span>
            <FaRegFileAlt />
          </span>
          <span>Standing Order Info {index+1}</span>
        </a>
                        </div>)
       })
                      }
                  </div> )
                }
                </div>
              
              </div> 
              <div className=" flex justify-center items-center mx-auto  "> 
                <p className="lg:w-2/3 w-full  absolute bottom-2 text-[#737373] text-justify px-4"> Disclaimer: These forms and consents must be used in conjunction with applicable federal and state rules as they relate to the standard of care required to provide such medical and cosmetic treatment. Nothing in these documents or treatment protocols should be interpreted to supersede applicable federal or state rules. These documents are meant for guidance and information only – use of the forms should be in conjunction with advice from local legal counsel based upon your individual circumstances. Find a MD 4 Me assumes no liability from any use of these forms. Transfer or sale of these forms is strictly prohibited. All policies/procedures and protocols are copyrighted.</p>
              </div>
            </TabsContent>
         
            <TabsContent   value="Policies">
              <div className="lg:mx-8 mx-4 bg-[#FDFDFD] rounded-lg lg:px-10 px-4 py-2 lg:py-5 h-[100%]">
                <p className=" text-nowrap lg:text-xl text-[#252B42] font-semibold pb-2">
                  {" "}
                  Policies
                </p> 
                <p className="lg:text-lg text-[#252B42] pb-6">View Policies Document</p> 
                <div className="h-[500px] overflow-y-auto"> 
                  
                {
                   resources?.map((values:any , index:number)=> <div key={index}>   
                   {
                   values?.policy_image?.length > 0 && <p className=" text-nowrap  lg:text-xl text-[#252B42] font-semibold pb-3"> {values?.tyer_name} </p>
                   }
                 
{
values?.policy_image?.map((value:any , index:number)=><div  key={index}> 
 <div className=" bg-[#E8F6FE] px-4 py-2 rounded-lg lg:w-[280px] mb-2">
                   <a className="flex text-[#1D75F2] items-center gap-2"  href={`${baseUrl}${value}`} download={`Policies Info ${index+1}.pdf `}
                    target="_blank" >
                     <span>
                       <FaRegFileAlt />{" "}
                     </span>{" "}
                     <span>Policies Info {index+1}</span>
                   </a>
                 </div>
</div>)
}
                   </div> 
                  )
                }
                   </div>
              
              </div> 
              <div className=" flex justify-center items-center mx-auto"> 
                <p className="lg:w-2/3 w-full  absolute bottom-2 text-[#737373] text-justify px-4"> Disclaimer: These forms and consents must be used in conjunction with applicable federal and state rules as they relate to the standard of care required to provide such medical and cosmetic treatment. Nothing in these documents or treatment protocols should be interpreted to supersede applicable federal or state rules. These documents are meant for guidance and information only – use of the forms should be in conjunction with advice from local legal counsel based upon your individual circumstances. Find a MD 4 Me assumes no liability from any use of these forms. Transfer or sale of these forms is strictly prohibited. All policies/procedures and protocols are copyrighted.</p>
              </div>
            </TabsContent>
         
            <TabsContent   value="Consents">
              <div className="lg:mx-8 mx-4 bg-[#FDFDFD] rounded-lg lg:px-10 px-4 py-2 lg:py-5 h-[100%]">
                <p className=" text-nowrap lg:text-xl text-[#252B42] font-semibold pb-2">
                  {" "}
                  Consents
                </p> 
                <p className="lg:text-lg text-[#252B42] pb-6">View Consents Document</p>  
                <div className="h-[500px] overflow-y-auto"> 
                  
                {
                   resources?.map((values:any , index:number)=><div key={index}>  
                   {
                   values?.constant_image?.length > 0 && <p className=" text-nowrap  lg:text-xl text-[#252B42] font-semibold pb-3"> {values?.tyer_name} </p>
                   }
                    
                   {
                   values?.constant_image?.map((value:any , index:number)=> 
                    <div key={index} className=" bg-[#E8F6FE] px-4 py-2 rounded-lg lg:w-[280px] mb-2">
                                      <a className="flex text-[#1D75F2] items-center gap-2"  href={`${baseUrl}${value}`} download={`Consents Info ${index+1}.pdf `} 
                                       target="_blank" >
                                        <span>
                                          <FaRegFileAlt />{" "}
                                        </span>{" "}
                                        <span>Consents Info {index+1}</span>
                                      </a>
                                    </div>
                  )
                   }
                                      </div>  )
                }
                   </div>
                
              </div> 
              <div className=" flex justify-center items-center mx-auto"> 
                <p className="lg:w-2/3 w-full  absolute bottom-2 text-[#737373] text-justify px-4"> Disclaimer: These forms and consents must be used in conjunction with applicable federal and state rules as they relate to the standard of care required to provide such medical and cosmetic treatment. Nothing in these documents or treatment protocols should be interpreted to supersede applicable federal or state rules. These documents are meant for guidance and information only – use of the forms should be in conjunction with advice from local legal counsel based upon your individual circumstances. Find a MD 4 Me assumes no liability from any use of these forms. Transfer or sale of these forms is strictly prohibited. All policies/procedures and protocols are copyrighted.</p>
              </div>
            </TabsContent>
         

        </div>
      </Tabs>
    </div>
  );
};

export default BusinessResources;
