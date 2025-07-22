class Rest {
  constructor(node) {
    this.node = node;
    this.address = `http://${this.node.host}:${this.node.port}`;
  }

  async updatePlayer(guildId, data) {
    const res = await fetch(
      `${this.address}/v4/sessions/${this.node.sessionId}/players/${guildId}`,
      {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          Authorization: this.node.password,
          "Content-Type": "application/json",
        },
      }
    );

    return res.json();
  }

  async destroyPlayer(guildId) {
    await fetch(
      `${this.address}/v4/sessions/${this.node.sessionId}/players/${guildId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: this.node.password,
          "Content-Type": "application/json",
        },
      }
    );
  }
}

module.exports = Rest;
