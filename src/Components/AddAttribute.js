import * as React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from '@mui/material/Button';
import "./AddAttribute.css";

export default function AddAttribute() {
  const [attr_name, setAttrName] = React.useState("");
  const [Ptype, setPtype] = React.useState("");
  const [startTime, setStartTime] = React.useState(dayjs("2022-04-07"));
  const [endTime, setEndTime] = React.useState(dayjs("2022-04-07"));
  const [attr_type, setAttrType] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  const [attributes, setAttributes] = React.useState([]);
  const [addAttrs, setAddAttrs] = React.useState([]);

  const handleNameChange = (event) => {
    setAttrName(event.target.value);
  };
  const handleAttrTypeChange = (event) => {
    setAttrType(event.target.value);
  };
  const handleCheckChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleTypeChange = (event) => {
    setPtype(event.target.value);
  };
    const handleButtonClicked = (event) => {
      var attribute = {};
      attribute.attr_name = attr_name;
      attribute.attr_type = attr_type;
      attribute.properties = {};
      attribute.properties.time = { starttime: startTime, endtime: endTime };
      attribute.properties.location = "";
      setAddAttrs([...addAttrs, attribute]);
      console.log(addAttrs.length);
      for (let i = 0; i < addAttrs.length; i++) {
        console.log(addAttrs[i]);
    }
    };
    const handleTotButtonClicked = (event) => {
        setAttributes([...attributes, addAttrs]);
        console.log(attributes);
      };
  return (
    <div>
      <div>
        <h7>Enter Attribute Name</h7>
      </div>
        <div class="flex-parent-element">
      <div class="flex-child-element1">
        <TextField
          placeholder="Attribute Name"
          value={attr_name}
          onChange={handleNameChange}
          sx={{ marginTop: 1.5, marginBottom: 2 }}
        />
      </div>
      <div class="flex-child-element1">
      <Fab
            color="primary"
            size="small"
            onClick={handleButtonClicked}
            sx={ {marginTop: 2.5}}
            style={{
              backgroundColor: "#000080",
            }}
          >
            <AddIcon />
          </Fab>
      </div>
      </div>
      <div class="flex-parent-element">
        <div class="flex-child-element1">
          <FormControl variant="standard" sx={{ minWidth: 120 }}>
            <label>Select attribute type</label>
            <Select
              sx={{ marginTop: 1.5 }}
              value={attr_type}
              onChange={handleAttrTypeChange}
              displayEmpty
              variant="outlined"
            >
              <MenuItem value="" disabled hidden>
                {" "}
                Select type
              </MenuItem>
              <MenuItem value={"User Attribute"}>User Attribute</MenuItem>
              <MenuItem value={"Object Attribute"}>Object Attribute</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="flex-child-element2">
          <div className="flex-parent-element">
            <FormControlLabel
              sx={{ marginTop: 2.5 }}
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleCheckChange}
                  style={{
                    color: "#000080",
                  }}
                />
              }
              label="Properties"
            />
          </div>
          <div class="flex-parent-element">
            <div class="flex-child-element">
              {checked && (
                <FormControl variant="standard" sx={{ minWidth: 120 }}>
                  <label>Select key type</label>
                  <Select
                    value={Ptype}
                    onChange={handleTypeChange}
                    displayEmpty
                    variant="outlined"
                    sx={{ marginTop: 1.5 }}
                  >
                    <MenuItem value="" disabled hidden>
                      {" "}
                      Select type
                    </MenuItem>
                    <MenuItem value={"time"}>Time</MenuItem>
                    <MenuItem value={"location"}>Location</MenuItem>
                  </Select>
                </FormControl>
              )}
            </div>
            <div class="flex-child-element">
              {checked && Ptype === "time" && (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Stack spacing={3}>
                    <div class="flex-parent-element">
                      <div class="flex-child-element">
                        <label>Start Time</label>
                        <TimePicker
                          ampm={false}
                          openTo="hours"
                          views={["hours", "minutes", "seconds"]}
                          inputFormat="HH:mm:ss"
                          mask="__:__:__"
                          value={startTime}
                          onChange={(newValue) => {
                            setStartTime(newValue);
                          }}
                          renderInput={(params) => (
                            <TextField {...params} sx={{ mt: 1.5 }} />
                          )}
                        />
                      </div>
                      <div className="flex-child-element">
                        <label>End Time</label>
                        <TimePicker
                          ampm={false}
                          openTo="hours"
                          views={["hours", "minutes", "seconds"]}
                          inputFormat="HH:mm:ss"
                          mask="__:__:__"
                          value={endTime}
                          onChange={(newValue) => {
                            setEndTime(newValue);
                          }}
                          renderInput={(params) => (
                            <TextField {...params} sx={{ mt: 1.5 }} />
                          )}
                        />
                      </div>
                    </div>
                  </Stack>
                </LocalizationProvider>
              )}
            </div>
            <div className="col">
              {checked && Ptype === "location" && <div></div>}
            </div>
          </div>
        </div>
      </div>
      <div class="save">
      <Button 
      variant="contained" 
      onClick={handleTotButtonClicked}
            sx={ {marginTop: 2.5}}
            style={{
              backgroundColor: "#000080",
            }}
      >Save</Button>
      </div>
    </div>
  );
}
