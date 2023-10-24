import React, { Component } from "react";
import "../../styles/DiscordWidget.css"; // Import file CSS yang sudah dibuat

class DiscordWidget extends Component {
  render() {
    const serverId = "1085175345533165578"; // Ganti dengan ID server Discord Anda

    return <iframe title="Discord Widget" src={`https://discord.com/widget?id=${serverId}&theme=dark`} width="300" height="400" frameBorder="0" allowTransparency="true"></iframe>;
  }
}

export default DiscordWidget;
