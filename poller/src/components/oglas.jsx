export default function Oglas(props) {
  return (
    <div>
      <h1 class="text-slate-50 text-xl inline-block">
        {props.godina} | {props.predmet}
      </h1>
      
      <p class="text-slate-100">
        {props.sadrzaj}
      </p>
    </div>
  )
}