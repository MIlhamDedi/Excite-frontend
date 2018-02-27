package com.excitetry;

import com.reactnativenavigation.controllers.SplashActivity;

import android.widget.LinearLayout;
import android.graphics.Color;
import android.widget.ImageView;
import android.view.Gravity;

public class MainActivity extends SplashActivity {

    @Override
    public LinearLayout createSplashLayout() {
        LinearLayout view = new LinearLayout(this);
        ImageView imageView = new ImageView(this);
        view.setBackgroundColor(Color.parseColor("#FFFFFF"));
        view.setGravity(Gravity.CENTER);
        imageView.setImageResource(R.drawable.splash_screen);
        view.addView(imageView);
        return view;
    }
}
