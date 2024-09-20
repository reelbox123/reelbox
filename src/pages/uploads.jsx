import ReelsNavBar from "./reelsNavbar"
import Sidemenu from "../components/sidemenu"
import React, { useState } from 'react';
function Uploads () {
    const [audioFiles, setAudioFiles] = useState([]);
    const [audioTitle, setAudioTitle] = useState('');
    const [audioDescription, setAudioDescription] = useState('');
    const [audioImage, setAudioImage] = useState(null);
    const [audioFile, setAudioFile] = useState(null);
    const handleUpload = (e) => {
        e.preventDefault();
    
        if (!audioFile) {
          alert("Please select an audio file to upload.");
          return;
        }
    
        // Create a new audio object with the provided details
        const newAudio = {
          id: Date.now(),
          title: audioTitle,
          description: audioDescription,
          image: audioImage ? URL.createObjectURL(audioImage) : null,
          file: URL.createObjectURL(audioFile)
        };
        setAudioFiles([...audioFiles, newAudio]);

        // Reset form fields
        setAudioTitle('');
        setAudioDescription('');
        setAudioImage(null);
        setAudioFile(null);
    }
    
    return (
        <>
            <ReelsNavBar/>
            <Sidemenu/>
            <section className="pl-[300px] pt-[30px]">
                <h1 className="text-white text-[20px]">UPLOAD</h1>
                <div className="text-white relative">
                    <div className="border-2 border-neutral-800 mt-[30px] flex justify-center items-center flex-col py-[50px] px-[30px] w-[60%]">
                        <img className="w-[15%]" src="/Images/Upload.png" alt="" />
                        <div className="mt-[60px] flex justify-center items-center">
                            <h1 className="text-white text-[20px] mr-[40px]">Drag and drop or</h1>
                            <input
                                className="flex py-[10px] px-[10px] rounded-md text-[15px] font-medium shadow-md text-white hover:bg-[#ff014f] hover:text-white bg-[#DE0808] sm:hidden md:hidden lg:flex"
                                type="file"
                                accept="audio/*"
                                onChange={(e) => setAudioFile(e.target.files[0])}
                                required
                            />
                        </div>
                    </div>
                    <p className="text-white text-[20px] tracking-widest mt-[30px]">Enter Video Title</p>
                    <input value={audioTitle} onChange={(e) => setAudioTitle(e.target.value)} required className="mt-[10px] w-[60%] p-[10px] border-2 border-neutral-800 bg-transparent outline-none" type="text" />
                    <p className="text-white text-[20px] tracking-widest mt-[30px]">Description</p>
                    <input  value={audioDescription} onChange={(e) => setAudioDescription(e.target.value)} required className="mt-[10px] w-[60%] p-[10px] border-2 border-neutral-800 bg-transparent outline-none" type="text" />
                </div>
                <div className="flex justify-left items-center">
                    <div className="flex mt-[10px]">
                        <input className="mr-[10px]" type="checkbox" name="" id="" />
                        <h2 className="text-white">Short reels</h2>
                    </div>
                </div>
                <a href="/connect" rel="noopener noreferrer"><button  className="flex justify-center mb-[20px]  py-[10px] px-[70px] mt-[30px] rounded-md text-[15px] font-medium shadow-md text-white hover:bg-[#ff014f] hover:text-white bg-[#DE0808] w-[50%] sm:hidden md:hidden lg:flex" type="submit">Upload & Publish</button></a>
            </section>
        </>
    )
}
export default Uploads