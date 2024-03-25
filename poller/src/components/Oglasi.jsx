import axios from "axios"
import { Show, createResource } from "solid-js"
import Oglas from "./oglas"

const baseUrl = 'https://efee.etf.unibl.org:8443/api/public/oglasne-ploce'

const fetchOglasi = async () => {
  let responses = []
  for (let godina = 1; godina <= 4; godina++) { 
    const res = await axios.get(`${baseUrl}/${godina}`)
    responses.push(res.data)
  }
  
  return responses
}

const toRoman = (year) => {
  switch (year) {
    case 1: return 'I'
    case 2: return 'II'
    case 3: return 'III'
    case 4: return 'IV'
    default: return 'N/A'
  }
}

export default function Oglasi(props) {
  const [oglasi] = createResource(fetchOglasi)

  
  return (
    <div class="max-w-screen-xl mx-auto grid grid-flow-row grid-cols-3 p-4 gap-2">  
      <Show when={oglasi.loading == false}>
        <For each={oglasi().flat()} fallback={<h2>Loading...</h2>}>
          {
            (o) => {
              return (
                <div class="rounded-2xl border-2 p-4">
                  <Oglas
                    predmet={o.naslov}
                    godina={toRoman(o.oglasnaPloca.id)}
                    sadrzaj={o.sadrzaj}
                    />
                </div>
                )
              }
            }
        </For>
      </Show>
    </div>
  )
}