import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   const {id} = req.query;
   console.log(id);
   res.status(200).json({
      product: 'single product'
   });
}