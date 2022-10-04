
import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { firstname, lastname,email,message } = req.body
        if (req.method === 'POST') {
            // Process a POST request
            const  test = req.query
            res.status(200).json({ firstname, lastname, email, message} )
          } else {
            // Handle any other HTTP method
            res.redirect(307, '/404')
          }
    } catch (err) {
        res.redirect(307, '/404')
    }
}
