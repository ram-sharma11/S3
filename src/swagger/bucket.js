/**
 * @openapi
 * /bucket:
 *  post:
 *    summary: To create Bucket
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *                name:
 *                  type: string
 *                  example: 'DemoBucket'
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
 * /bucket/getbucket/{bucketid}:
 *  get:
 *    summary: get the bucket details by id and list of files uploaded in it.
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - name: bucketid
 *        in: path
 *        required: true
 *    responses:
 *      200:
 *         description: Request Sucessful
 *      401:
 *         description: Unauthorized
 */


/**
 * @openapi
 * /bucket/editbucket/{bucketid}:
 *  patch:
 *    summary: Update the bucket name.
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - name: bucketid
 *        in: path
 *        required: true
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *                name:
 *                  type: string
 *                  example: 'Bucket01'
 * 
 *    responses:
 *      200:
 *         description: Request Sucessful
 *      401:
 *         description: Unauthorized
 */


/**
 * @openapi
 * /bucket/deletebucket/{bucketid}:
 *  delete:
 *    summary: Delete the bucket.
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - name: bucketid
 *        in: path
 *        required: true
 *    responses:
 *      200:
 *         description: Request Sucessful
 *      401:
 *         description: Unauthorized
 */

/**
 * @openapi
 * /file/put:
 *  post:
 *    summary: Upload a file
 *    security:
 *      - bearerAuth: []
 *    consumes:
 *      - multipart/form-data
 *    parameters:
 *      - in: formData
 *        name: file
 *        type: file
 *        required: true
 *        description: The file to upload
 *      - in: formData
 *        name: bucketId
 *        type: string
 *        required: true
 *    responses:
 *      '200':
 *         description: Request Successful
 *      '201':
 *         description: Created
 *      '400':
 *         description: Bad Request
 */

/**
 * @openapi
 * /file/{fileId}:
 *  get:
 *    summary: Download a file
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - name: fileId
 *        in: path
 *        required: true
 *        description: The ID of the file to download
 *    responses:
 *      '200':
 *         description: File download successful
 *         content:
 *           application/octet-stream:
 *             schema:
 *               type: string
 *               format: binary
 *      '401':
 *         description: Unauthorized - User not authenticated
 */

/**
 * @openapi
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 */