import React from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { StyledEngineProvider } from "@mui/material";
import { Link } from "react-router-dom";
function BiletAl() {
  const [value, setValue] = React.useState(dayjs("2022-04-07"));
  return (
      <div className="biletAl">
      <form className="row">
        <div class="col-lg-3 col-12 dropdown p-lg-0 my-lg-0 mb-3">
          <select class="form-select" aria-label="Default select example">
            <option selected>Nereden</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div class="ms-lg-3 ms-0 col-lg-3 col-12 dropdown p-lg-0 my-lg-0 my-3">
        <select class="form-select" aria-label="Default select example">
            <option selected>Nereye</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="row"></div>
        <div style={{ marginTop: "20px" }}></div>
        <div className="px-lg-0 col-lg-3 col-12 my-lg-0 mt-2">
          <StyledEngineProvider injectFirst>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <MobileDatePicker
                  label="Yolculuk Tarihi"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  className="w-100"
                  renderInput={(params) => <TextField {...params} />}
                />
                {/* <DesktopDatePicker
          label="For desktop"
          value={value}
          minDate={dayjs('2017-01-01')}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <DatePicker
          disableFuture
          label="Responsive"
          openTo="year"
          views={['year', 'month', 'day']}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        /> */}
              </Stack>
            </LocalizationProvider>
          </StyledEngineProvider>
        </div>
        <div className="row"></div>
       <div className="px-lg-0 p-3 col-lg-3 mt-3">
       <Link to='sefersec' class="btn btn-primary w-100 p-lg p-2">Bilet Bul</Link>
       </div>
      </form>
    </div>
  );
}

export default BiletAl;
