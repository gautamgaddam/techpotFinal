import React, { useEffect, useState } from "react"
import { MenuItem, Box, TextField, FormControl } from "@material-ui/core"
import { DataGrid } from "@material-ui/data-grid"
const statesUrl = "https://cdn-api.co-vin.in/api/v2/admin/location/states"
const districtsUrl = "https://cdn-api.co-vin.in/api/v2/admin/location/districts/"
const vaccinesUrl = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict"
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiI4ZGZiZDA5MC04NDExLTQ4MmItYjFhZi0yMGEwZDA4NjgzY2UiLCJ1c2VyX2lkIjoiOGRmYmQwOTAtODQxMS00ODJiLWIxYWYtMjBhMGQwODY4M2NlIiwidXNlcl90eXBlIjoiQkVORUZJQ0lBUlkiLCJtb2JpbGVfbnVtYmVyIjo3OTg5NjkyNTcxLCJiZW5lZmljaWFyeV9yZWZlcmVuY2VfaWQiOjg3Mjg2NDU1MjIwOTQwLCJzZWNyZXRfa2V5IjoiYjVjYWIxNjctNzk3Ny00ZGYxLTgwMjctYTYzYWExNDRmMDRlIiwidWEiOiJNb3ppbGxhLzUuMCAoTWFjaW50b3NoOyBJbnRlbCBNYWMgT1MgWCAxMF8xNV83KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvOTAuMC40NDMwLjkzIFNhZmFyaS81MzcuMzYiLCJkYXRlX21vZGlmaWVkIjoiMjAyMS0wNS0xM1QwMjo1NDo0OS4xNzJaIiwiaWF0IjoxNjIwODc0NDg5LCJleHAiOjE2MjA4NzUzODl9.l42icqOCTGlVUwN05LoAdgINLNC2qHOeCRDkDsyZVsY`
const user_agents = ["Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.1 Safari/605.1.15", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36 Edg/86.0.622.63", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36 Edg/87.0.664.75", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:84.0) Gecko/20100101 Firefox/84.0", "Mozilla/5.0 (X11; Linux x86_64; rv:84.0) Gecko/20100101 Firefox/84.0", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36"]

const VaccineSlots = () => {
  const [states, setStates] = useState([])
  const [districts, setDistricts] = useState([])
  const [vaccines, setVaccines] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [vaccineLoader, setVaccineLoader] = useState(false)
  const [state, setState] = useState(0)
  const [district, setDistrict] = useState(0)
  const requestOptions = {
    method: "GET",
    headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" },
  }
  useEffect(() => {
    getStates()
  }, [])
  async function getStates() {
    setIsLoaded(true)

    await fetch(`${statesUrl}`, requestOptions)
      .then((res) => res.json())
      .then(
        (result) => {
          setStates(result.states)
          setIsLoaded(false)
        },

        (error) => {
          console.log(error)
          setIsLoaded(false)
        }
      )
  }
  async function getDistricts(id) {
    await fetch(`${districtsUrl}${id}`, requestOptions)
      .then((res) => res.json())
      .then(
        (result) => {
          setDistricts(result.districts)
        },

        (error) => {
          console.log(error)
        }
      )
  }
  const handleChange = (e, type) => {
    const { value } = e.target

    if (type === "states") {
      setState(value)
      getDistricts(value)
    }

    if (type === "districts") {
      setDistrict(value)
      setVaccineLoader(true)
      setTimeout(() => {
        getVaccines(value)
      }, 1000)
    }
  }

  const getVaccines = async (value) => {
    const dateFormat = new Date().toISOString().split("T")[0]
    let date = dateFormat.split("-")
    date = date[2] + "-" + date[1] + "-" + date[0]
    const userAgent = user_agents[Math.floor(Math.random() * user_agents.length + 1)]

    const requestOp = {
      method: "GET",
      header: { "User-Agent": userAgent },
    }
    await fetch(`${vaccinesUrl}?district_id=${value}&date=${date}`, requestOp)
      .then((res) => res.json())
      .then(
        (result) => {
          const centers =
            result.centers.length > 0
              ? result.centers.map((center) => {
                  let eachCenter = []
                  center.sessions.forEach((sess) => {
                    let obj = { ...sess, ...center }
                    delete obj.sessions
                    eachCenter.push(obj)
                  })
                  return eachCenter
                })
              : []
          const formatCenters = [].concat.apply([], centers)
          const allCenters =
            formatCenters.length > 0
              ? formatCenters.map((x) => {
                  return { ...x, id: x.session_id }
                })
              : []
          setVaccines(allCenters)
          setVaccineLoader(false)
        },

        (error) => {
          setIsLoaded(false)
          setVaccineLoader(false)
        }
      )
  }

  const columns = [
    { field: "name", headerName: "Name", width: 300 },
    { field: "available_capacity", headerName: "Availability", width: 150 },
    {
      field: "date",
      headerName: "date",
      width: 130,
    },
  ]

  return (
    <div style={{ color: "black", paddingTop: "40px" }}>
      <h2 style={{ marginBottom: "1rem", marginLeft: "2rem" }}>Vaccine Finder</h2>
      {isLoaded ? (
        <div>Loading...</div>
      ) : (
        <FormControl cols={2} style={{ flexDirection: "row", width: "100%", padding: "2rem", background: "#fff" }}>
          {states.length > 0 && (
            <TextField id="select" label="State" select value={state} onChange={(e) => handleChange(e, "states")} size="small" style={{ width: "250px" }}>
              {states.map((state, i) => {
                return (
                  <MenuItem key={i} value={state.state_id}>
                    {state.state_name}
                  </MenuItem>
                )
              })}
            </TextField>
          )}
          {districts.length > 0 && (
            <TextField id="select" label="District" value={district} select onChange={(e) => handleChange(e, "districts")} size="small" style={{ width: "250px", paddingLeft: "20px" }}>
              {districts.map((district, i) => {
                return (
                  <MenuItem value={district.district_id} key={i}>
                    {district.district_name}
                  </MenuItem>
                )
              })}
            </TextField>
          )}
        </FormControl>
      )}
      <Box style={{ background: "#fff", height: "70vh", width: "100%" }}>
        <DataGrid rows={vaccines} columns={columns} pageSize={100} loading={vaccineLoader} />
      </Box>
    </div>
  )
}

export default VaccineSlots
