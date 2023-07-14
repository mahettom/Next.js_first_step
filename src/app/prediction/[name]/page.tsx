// ————————————————————————————————————————————————————————— SERVER COMPONENT ———————————————————————————


const getPredictedAge = async (name: string) => {
    const res = await fetch(`api.agify.io/?name=${name}`)
    return res.json()
}

const getPredictedGender = async (name: string) => {
    const res = await fetch(`api.genderize.io/?name=${name}`)
    return res.json()
}

const getPredictedCountry = async (name: string) => {
    const res = await fetch(`api.nationalize.io/?name=${name}`)
    return res.json()
}


interface Params {
    params: { name: string }
}

export default function Page({ params }: Params) {




    return (

        <div className='bg-black flex flex-col justify-center items-center h-screen w-full'>
            {" "}
            {params.name}
        </div>

    )
}