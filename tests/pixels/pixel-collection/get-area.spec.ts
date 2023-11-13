// Copyright Dirk Lemstra https://github.com/dlemstra/magick-wasm.
// Licensed under the Apache License, Version 2.0.

import { TestImages } from '@test/test-images';

describe('PixelCollection#getArea', () => {
    it('should return array with the correct size', () => {
        TestImages.Builtin.logo.use((image) => {
            image.getPixels(pixels => {
                const data = pixels.getArea(0, 0, 4, 5);
                expect(data).not.toBeNull();
                expect(data.length).toBe(80);
            });
        });
    });
});
