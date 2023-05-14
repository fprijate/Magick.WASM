// Copyright Dirk Lemstra https://github.com/dlemstra/magick-wasm.
// Licensed under the Apache License, Version 2.0.

import { ClassType } from '../../src/class-type';
import { TestImages } from '../test-images';

describe('MagickImage#classType', () => {
    it('should return the class type the image', async () => {
        await TestImages.Builtin.logo.read(image => {
            expect(image.classType).toBe(ClassType.Pseudo);
        });
    });

    it('should change the class type', async () => {
        await TestImages.Builtin.logo.read(image => {
            image.classType = ClassType.Direct;
            expect(image.classType).toBe(ClassType.Direct);
        });
    });
});
