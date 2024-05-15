/**
 * @openapi
 * /auth/signUp:
 *  post:
 *    summary: To Register the User.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *                email:
 *                  type: string
 *                  example: 'user@yupmail.com'
 *                name:
 *                  type: string
 *                  example: 'User'
 *                password:
 *                  type: string
 *                  example: 'user5@1234'
 *                
 *    responses:
 *      200:
 *         description: Request Sucessfull
 *      201:
 *         description: Created
 *      400:
 *         description: Bad Request
 */

/**
 * @openapi
 * /auth/login:
 *  post:
 *    summary: Login the User.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *                email:
 *                  type: string
 *                  example: 'user@yupmail.com'
 *                password:
 *                  type: string
 *                  example: 'user5@1234'
 *    responses:
 *      200:
 *         description: Request Sucessfull
 *      401:
 *         description: Bad Request
 */
