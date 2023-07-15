// ————————————————————————————————————————————————————————— SERVER COMPONENT ———————————————————————————


const getPredictedAge = async (name: string) => {
    const res = await fetch(`https://api.agify.io/?name=${name}`)
    return res.json()
}

const getPredictedGender = async (name: string) => {
    const res = await fetch(`https://api.genderize.io/?name=${name}`)
    return res.json()
}

const getPredictedCountry = async (name: string) => {
    const res = await fetch(`https://api.nationalize.io/?name=${name}`)
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

        // ————————————————————————————————————————————————————————— Accessing property inside received promise ——
        <div className='bg-black flex flex-col justify-center items-center h-screen w-full'>
            <div>
                <div>Personal Info of {params.name} </div>
                <div>{`number of ${params.name}'s:`} {age?.count} </div>
                <div> Age: {age?.age} </div>
                <div> Gender: {gender?.gender} </div>
                <div> Country: {country?.country[0]?.country_id} </div>
            </div>
        </div>

    )
}