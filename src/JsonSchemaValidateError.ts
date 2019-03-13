// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

export class JsonSchemaValidateError extends Error {
    constructor(message: string) {
        super(message);
    }
}