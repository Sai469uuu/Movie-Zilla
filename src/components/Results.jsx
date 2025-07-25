import Card from "./Card"

export default function Results({results}) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl py-4 mx-auto">
        {results.map((result)=>{
            return <Card key={result.id} result={result}/>
            
        })}
    </div>
  )
}
