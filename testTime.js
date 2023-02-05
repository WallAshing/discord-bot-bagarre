const axios = require("axios");

const test = async () => {
    const response = await axios.get(
        `https://discord.com/api/v10/users/175577596891889664`,
        {
            headers: {
                Authorization: "Bot " + "Nzg3MDE3MjA3MTA4MzM3Njc0.X9O05A.9spEgIhQz6vC8TbbJ1QaJWJJHtM"
            }
        })
    console.log(response.data)
}

test()