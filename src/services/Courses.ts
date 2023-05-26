import { supabase } from "../supabase";
import { Course } from "../types/Courses";

// Fetch all courses
async function fetchCourses(): Promise<Course[]> {
  try {
    const { data, error } = await supabase.from("courses").select("*");
    if (error) throw error;
    return data as Course[];
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
}

// Create a new course
async function createCourse(
  courseData: Partial<Course>
): Promise<Course | null> {
  try {
    const { data, error } = await supabase
      .from("courses")
      .insert(courseData)
      .single();
    if (error) throw error;
    return data as Course;
  } catch (error) {
    console.error("Error creating course:", error);
    return null;
  }
}

// Update an existing course
async function updateCourse(
  courseId: number,
  updates: Partial<Course>
): Promise<Course | null> {
  try {
    const { data, error } = await supabase
      .from("courses")
      .update(updates)
      .match({ id: courseId })
      .single();
    if (error) throw error;
    return data as Course;
  } catch (error) {
    console.error("Error updating course:", error);
    return null;
  }
}

// Delete a course
async function deleteCourse(courseId: number): Promise<boolean> {
  try {
    const { error } = await supabase
      .from("courses")
      .delete()
      .match({ id: courseId });
    if (error) throw error;
    return true;
  } catch (error) {
    console.error("Error deleting course:", error);
    return false;
  }
}

export { fetchCourses, createCourse, updateCourse, deleteCourse };
