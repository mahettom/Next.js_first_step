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

export default async function Page({ params }: Params) {
    // ————————————————————————————————————————————————————————— Reception promise ———————————————————————————
    const ageData = getPredictedAge(params.name)
    const genderData = getPredictedGender(params.name)
    const countryData = getPredictedCountry(params.name)

    // ————————————————————————————————————————————————————————— Resolve all promises ————————————————————————
    const [age, gender, country] = await Promise.all([ageData, genderData, countryData])

    return (

        <div className='bg-black flex flex-col justify-center items-center h-screen w-full'>
            {" "}
            {params.name}
        </div>

    )
}