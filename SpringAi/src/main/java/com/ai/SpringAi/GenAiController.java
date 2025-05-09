package com.ai.SpringAi;

import java.io.IOException;
import java.util.List;

import org.springframework.ai.image.ImageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/api/ai/v1/")
public class GenAiController {
    @Autowired
    private ChatService chatService;
    @Autowired
    private ImageService imageService;
    @Autowired
    private RecipeService recipeService;

    @GetMapping(value = "ask-ai")
    public String getResponse(@RequestParam String prompt) {
        return chatService.getResponse(prompt);
    }

    @GetMapping(value = "ask-ai-options")
    public String getResponseOptions(@RequestParam String prompt) {
        return chatService.getResponse(prompt);
    }

    @GetMapping("generate-image")
    public List<String> generateImages(HttpServletResponse response,
            @RequestParam String prompt,
            @RequestParam(defaultValue = "hd") String quality,
            @RequestParam(defaultValue = "4") int n,
            @RequestParam(defaultValue = "1024") int width,
            @RequestParam(defaultValue = "1024") int height) throws IOException {
        ImageResponse imageResponse = imageService.generateImage(prompt, quality, n, width, height);

        // Streams to get urls from ImageResponse
        List<String> imageUrls = imageResponse.getResults().stream()
                .map(result -> result.getOutput().getUrl())
                .toList();

        return imageUrls;
    }

    @GetMapping("recipe-creator")
    public String recipeCreator(@RequestParam String ingredients,
            @RequestParam(defaultValue = "any") String cuisine,
            @RequestParam(defaultValue = "") String dietaryRestriction) {
        return recipeService.createRecipe(ingredients, cuisine, dietaryRestriction);
    }
}
