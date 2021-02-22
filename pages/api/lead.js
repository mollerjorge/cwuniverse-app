import axios from 'axios'

export default async (req, res) => {
  try {
    const { userData } = req.body
    const options = {
      method: 'POST',
      headers: {
        Authorization: 'Bearer dG9rOmNlN2Y0MTk5Xzc0MmJfNDBhYV85M2FkXzM1MjgyZDdkNGRhODoxOjA=',
        'content-type': 'application/json',
      },
      data: {
        role: userData.role,
        email: userData.email,
      },
      url: 'https://api.intercom.io/contacts',
    }

    await axios(options)
    return res.status(200).json({ success: true })
  } catch (error) {
    return res.status(400).json({ error })
  }
}
