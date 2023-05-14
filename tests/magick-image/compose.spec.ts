// Copyright Dirk Lemstra https://github.com/dlemstra/magick-wasm.
// Licensed under the Apache License, Version 2.0.

import { CompositeOperator } from '../../src/composite-operator';
import { TestImages } from '../test-images';

describe('MagickImage#compose', () => {
    it('should return the compose operator', async () => {
        await TestImages.Builtin.logo.read(image => {
            expect(image.compose).toBe(CompositeOperator.Over);
        });
    });

    it('should change the compose operator', async () => {
        await TestImages.Builtin.logo.read(image => {
            image.compose = CompositeOperator.ChangeMask;
            expect(image.compose).toBe(CompositeOperator.ChangeMask);
        });
    });
});
