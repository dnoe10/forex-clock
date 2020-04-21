import React from 'react';
import './TimezoneSelect.css';

function TimezoneSelect(props) {
  return (
    <select
      className="timezone-select"
      title="Select a timezone"
      value={props.timezone}
      onChange={props.onChangeTimezone}
    >
      <option value="Africa/Abidjan">Africa/Abidjan</option>
      <option value="Africa/Cairo">Africa/Cairo</option>
      <option value="Africa/Johannesburg">Africa/Johannesburg</option>
      <option value="Africa/Lagos">Africa/Lagos</option>
      <option value="Africa/Maputo">Africa/Maputo</option>
      <option value="Africa/Nairobi">Africa/Nairobi</option>
      <option value="Africa/Tripoli">Africa/Tripoli</option>
      <option value="America/Adak">America/Adak</option>
      <option value="America/Anchorage">America/Anchorage</option>
      <option value="America/Argentina/Buenos_Aires">
        America/Argentina/Buenos_Aires
      </option>
      <option value="America/Atikokan">America/Atikokan</option>
      <option value="America/Cancun">America/Cancun</option>
      <option value="America/Chicago">America/Chicago</option>
      <option value="America/Curacao">America/Curacao</option>
      <option value="America/Denver">America/Denver</option>
      <option value="America/Detroit">America/Detroit</option>
      <option value="America/Edmonton">America/Edmonton</option>
      <option value="America/Halifax">America/Halifax</option>
      <option value="America/Havana">America/Havana</option>
      <option value="America/Indiana/Indianapolis">
        America/Indiana/Indianapolis
      </option>
      <option value="America/Jamaica">America/Jamaica</option>
      <option value="America/Kentucky/Louisville">
        America/Kentucky/Louisville
      </option>
      <option value="America/Los_Angeles">America/Los_Angeles</option>
      <option value="America/Manaus">America/Manaus</option>
      <option value="America/Mazatlan">America/Mazatlan</option>
      <option value="America/Mexico_City">America/Mexico_City</option>
      <option value="America/New_York">America/New_York</option>
      <option value="America/Noronha">America/Noronha</option>
      <option value="America/Panama">America/Panama</option>
      <option value="America/Phoenix">America/Phoenix</option>
      <option value="America/Port_of_Spain">America/Port_of_Spain</option>
      <option value="America/Regina">America/Regina</option>
      <option value="America/Rio_Branco">America/Rio_Branco</option>
      <option value="America/Santiago">America/Santiago</option>
      <option value="America/Sao_Paulo">America/Sao_Paulo</option>
      <option value="America/St_Johns">America/St_Johns</option>
      <option value="America/Tijuana">America/Tijuana</option>
      <option value="America/Toronto">America/Toronto</option>
      <option value="America/Vancouver">America/Vancouver</option>
      <option value="America/Whitehorse">America/Whitehorse</option>
      <option value="America/Winnipeg">America/Winnipeg</option>
      <option value="Asia/Ashgabat">Asia/Ashgabat</option>
      <option value="Asia/Bangkok">Asia/Bangkok</option>
      <option value="Asia/Dhaka">Asia/Dhaka</option>
      <option value="Asia/Dubai">Asia/Dubai</option>
      <option value="Asia/Ho_Chi_Minh">Asia/Ho_Chi_Minh</option>
      <option value="Asia/Jerusalem">Asia/Jerusalem</option>
      <option value="Asia/Kathmandu">Asia/Kathmandu</option>
      <option value="Asia/Kolkata">Asia/Kolkata</option>
      <option value="Asia/Macau">Asia/Macau</option>
      <option value="Asia/Makassar">Asia/Makassar</option>
      <option value="Asia/Riyadh">Asia/Riyadh</option>
      <option value="Asia/Seoul">Asia/Seoul</option>
      <option value="Asia/Shanghai">Asia/Shanghai</option>
      <option value="Asia/Singapore">Asia/Singapore</option>
      <option value="Asia/Taipei">Asia/Taipei</option>
      <option value="Asia/Tehran">Asia/Tehran</option>
      <option value="Asia/Thimphu">Asia/Thimphu</option>
      <option value="Asia/Tokyo">Asia/Tokyo</option>
      <option value="Asia/Ulaanbaatar">Asia/Ulaanbaatar</option>
      <option value="Asia/Urumqi">Asia/Urumqi</option>
      <option value="Asia/Yangon">Asia/Yangon</option>
      <option value="Atlantic/Azores">Atlantic/Azores</option>
      <option value="Atlantic/Cape_Verde">Atlantic/Cape_Verde</option>
      <option value="Atlantic/Faroe">Atlantic/Faroe</option>
      <option value="Atlantic/Reykjavik">Atlantic/Reykjavik</option>
      <option value="Australia/Adelaide">Australia/Adelaide</option>
      <option value="Australia/Brisbane">Australia/Brisbane</option>
      <option value="Australia/Broken_Hill">Australia/Broken_Hill</option>
      <option value="Australia/Darwin">Australia/Darwin</option>
      <option value="Australia/Hobart">Australia/Hobart</option>
      <option value="Australia/Lord_Howe">Australia/Lord_Howe</option>
      <option value="Australia/Melbourne">Australia/Melbourne</option>
      <option value="Australia/Perth">Australia/Perth</option>
      <option value="Australia/Sydney">Australia/Sydney</option>
      <option value="Europe/Belgrade">Europe/Belgrade</option>
      <option value="Europe/Chisinau">Europe/Chisinau</option>
      <option value="Europe/Dublin">Europe/Dublin</option>
      <option value="Europe/Helsinki">Europe/Helsinki</option>
      <option value="Europe/Istanbul">Europe/Istanbul</option>
      <option value="Europe/London">Europe/London</option>
      <option value="Europe/Moscow">Europe/Moscow</option>
      <option value="Europe/Oslo">Europe/Oslo</option>
      <option value="Europe/Prague">Europe/Prague</option>
      <option value="Europe/Rome">Europe/Rome</option>
      <option value="Europe/Warsaw">Europe/Warsaw</option>
      <option value="Europe/Zurich">Europe/Zurich</option>
      <option value="Pacific/Auckland">Pacific/Auckland</option>
      <option value="Pacific/Chatham">Pacific/Chatham</option>
      <option value="Pacific/Chuuk">Pacific/Chuuk</option>
      <option value="Pacific/Easter">Pacific/Easter</option>
      <option value="Pacific/Enderbury">Pacific/Enderbury</option>
      <option value="Pacific/Gambier">Pacific/Gambier</option>
      <option value="Pacific/Guam">Pacific/Guam</option>
      <option value="Pacific/Honolulu">Pacific/Honolulu</option>
      <option value="Pacific/Kiritimati">Pacific/Kiritimati</option>
      <option value="Pacific/Kwajalein">Pacific/Kwajalein</option>
      <option value="Pacific/Marquesas">Pacific/Marquesas</option>
      <option value="Pacific/Pago_Pago">Pacific/Pago_Pago</option>
      <option value="Pacific/Pohnpei">Pacific/Pohnpei</option>
    </select>
  );
}

export default TimezoneSelect;
