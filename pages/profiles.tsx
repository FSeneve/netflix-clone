import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";


export async function getServerSideProps(context: NextPageContext){
    const session = await getSession(context);

    if(!session){
        return {
            redirect: {
                destination: '/auth',
                permanent: false
            }
        }
    }

    return {
        props: {}
    }
}


const Profiles = ()=>{
    const router = useRouter();
    const { data: user } = useCurrentUser();
    return (
        <div className="flex justify-center items-center h-full">
            <div className="flex flex-col">
                <h1 className="text-3xl md:text-6xl text-white text-center">Who is watching?</h1>
                <div className="flex items-center justify-center gap-10 mt-8">
                    <div onClick={()=>{router.push('/')}}>
                        <div className="group flex-row w-44 mx-auto">
                            <div className="w-44 h-44 flex items-center justify-center rounded-md border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
                                <img src="/images/default-blue.png" alt="profiles" />
                            </div>
                            <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">
                                {user?.name}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profiles;