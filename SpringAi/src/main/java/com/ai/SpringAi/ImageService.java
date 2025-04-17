package com.ai.SpringAi;

import org.springframework.ai.image.ImagePrompt;
import org.springframework.ai.image.ImageResponse;
import org.springframework.ai.openai.OpenAiImageModel;
import org.springframework.ai.openai.OpenAiImageOptions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImageService {
    @Autowired
    private OpenAiImageModel openAiImageModel;

    public ImageResponse generateImage(String prompt,
            String quality,
            int n,
            int width,
            int height) {
        try {
            ImageResponse imageResponse = openAiImageModel.call(
                    new ImagePrompt(prompt,
                            OpenAiImageOptions.builder()
                                    .withModel("dall-e-2")
                                    .withQuality(quality)
                                    .withN(n)
                                    .withHeight(height)
                                    .withWidth(width).build()));
            return imageResponse;
        } catch (Exception e) {
            System.out.println("Image generation failed for prompt:" + prompt + " " + e);
            throw new RuntimeException("Image generation failed for prompt: " + prompt, e);
        }

    }
}
